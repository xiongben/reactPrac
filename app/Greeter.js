import React, {
	Component
} from 'react'
import config from './config.json';
import styles from './Greeter.css'; //导入
import pic1 from './img/pic1.jpg';
import axios from 'axios';

//console.log(styles);

const scaleNames={
	c:'Celsius',
	f:'Fahrenheit'
}


function BoilRedict(props) {
	if(props.name >= 100) {
		return <p>水会烧开</p>;
	}
	return <p>水不会烧开</p>;
}

class Greeter extends Component {
	constructor(props) {

		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			temperature: '',
			posts: []

		};

	}
	
	
	handleChange(e){
		this.props.onTemperatureChange(e.target.value);
	}
	
	render() {
		const temperature=this.props.temperature;
		const scale=this.props.scale;
		return(
			<div className={styles.root}>
        {/*{config.greetText}
        <div>
           <img src={pic1} className={styles.pic}/>
        </div>*/}
        <p>输入一个{scaleNames[scale]}:</p>
        <input value={temperature} onChange={this.handleChange}/>
        <BoilRedict name={parseInt(temperature)}/>
      </div>
		);
	}
}

class Calculator extends Component{
	
	constructor(props){
		super(props);
		this.handleCelChange=this.handleCelChange.bind(this);
		this.handleFaChange=this.handleFaChange.bind(this);
		this.state={
			temperature:'',
			scale:'c',
			posts: []
		};
	}
	componentDidMount() {

		axios.get("http://www.xiongsanniu.com/test.php")

			.then(res => {
        const posts=res.data.data;
        
        this.setState({
        	posts
        });
				//      const posts = res.data.data.children.map(obj => obj.data);
				//
				//      this.setState({ posts });

			});
	}
	handleCelChange(temperature){
		this.setState({
			scale:'c',
			temperature
		});
	}
	handleFaChange(temperature){
		this.setState({
			scale:'f',
			temperature
		});
	}
	render(){
		const scale=this.state.scale;
		const temperature=this.state.temperature;
		const celsius= scale === 'f'?tryConvert(temperature,toC):temperature;
		const fahrenheit= scale === 'c'?tryConvert(temperature,toF):temperature;
		const list=this.state.posts.map((val)=>
		  <span key={val.id}>{val.name},</span>
	);
		return (
			<div>
			  <Greeter scale="c" temperature={celsius} onTemperatureChange={this.handleCelChange}/>
			  <Greeter scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFaChange}/>
			  {list}
			</div>
		)
	}
}

function toC(fa){
	return (fa-32)*5/9;
}
function toF(cel){
	return (cel*9/5)+32;
}
function tryConvert(temperature,convert){
	const input = parseFloat(temperature);
	if(Number.isNaN(input)){
		return '';
	}
	const output = convert(input);
	const rounded = Math.round(output*1000)/1000;
	return rounded.toString();
}
export default Calculator;