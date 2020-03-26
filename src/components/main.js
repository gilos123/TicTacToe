import React from 'react'
import white from '../assets/whitesq.png'
import X from '../assets/ex.png'
import circle from '../assets/circle.png'
import Square from './Square'
import './main.css'

class TTT extends React.Component{
    state = {
        flag:0,
        content:[
            white,white,white,white,white,white,white,white,white
        ],
        condition:[
            true,true,true,true,true,true,true,true,true
        ],
        result:'',
        totalX:0,
        totalO:0
            
        
    };

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
        this.reset = this.reset.bind(this)
        this.totalReset = this.totalReset.bind(this)
        this.handleCircle = this.handleCircle.bind(this)
        this.handleX = this.handleX.bind(this)
        //this.bot = this.bot.bind(this);
    }
    

    handleX() {
        this.state.totalX++;
        this.setState({result:'X wins'})
        return ''
    }

    handleCircle () {
        this.state.totalO++;
        this.setState({result:'circle wins'})
        return ''
    } 

    
    win() {  
        let counter = 0;
        for(let i=0; i<3;i++) {
            if (this.state.content[3*i] === this.state.content[(3*i)+1] && this.state.content[i*3] === this.state.content[(3*i)+2] && this.state.content[i*3] !== white) 
            {
                if(this.state.content[i*3] === circle)
                {
                    this.handleCircle()
                } 
                else
                {
                    this.handleX()
                }       
            }
            else if (this.state.content[i] === this.state.content[i+3] && this.state.content[i] === this.state.content[i+6] && this.state.content[i] !== white)  {
                if(this.state.content[i] === circle)
                { 
                    this.handleCircle()
                } 
                else
                {
                    this.handleX()
                }       
                   
            }       
            }
            if ((this.state.content[0] === this.state.content[4] && this.state.content[0] === this.state.content[8] && this.state.content[0] !== white) || 
            (this.state.content[2] === this.state.content[4] && this.state.content[2] === this.state.content[6] && this.state.content[2] !== white)) {
                if(this.state.content[4] === circle){
                    this.handleCircle()
                } 
                else
                {
                    this.handleX()
                }    
        }
        for(let j=0; j<9 ;j++){
            if (this.state.content[j] !== white)
            {
                counter ++;
            }
        }  
        if(counter === 9)
        {
            return this.state.result = 'tie'
        }
                
    }

    handleClick(event,sign) {                             //manual mode handelcick X and O
        if(this.state.flag===0) {
            this.setState({ flag:1})
            if(this.state.condition[sign]) {
                this.state.content[sign] = circle;
                this.state.condition[sign] = false
            }  else {
                this.setState({ flag:0})
            }       
        }
        else {
            this.setState({ flag:0})
            if(this.state.condition[sign]) {
                this.state.content[sign] = X;
                this.state.condition[sign] = false;
            } else {
                this.setState({ flag:1})
            }       
        }
        this.win()
    }

    
    // handleClick(event,sign) { // bot mode handleclik O : BotMode
    //         if(this.state.condition[sign]) {
    //             this.state.content[sign] = circle;
    //             this.state.condition[sign] = false
    //             this.win()
    //             if((this.state.result != 'circle wins')) {
    //                 let x = this.bot()
    //                 this.state.content[x] = X;
    //                 this.state.condition[x] = false
    //                 this.win()
    //             }
    //         }    
    // }
    
    // bot() {
    //     let places = [];
    //     for(let i = 0;i< this.state.content.length;i++) {
    //         if(this.state.content[i] === white)
    //             places.push(i);
    //     }
    //     const len = places.length
    //     const randomIndex = Math.floor(Math.random() * len)
    //     return randomIndex;
    // }


    reset() {
        this.setState({
            flag:0,
            content:[
            white,white,white,white,white,white,white,white,white
        ],
        condition:[
            true,true,true,true,true,true,true,true,true
        ],
        result:''
        })
    }

    totalReset() {
        this.setState({
            totalO:0,
            totalX:0
        })
    }


    render()
    {
        return (
            <React.Fragment> 
                <table width = '100%' > 
                    <tbody>
                        <tr>
                            <td><Square sign={0} soucre={this.state.content[0]} click={this.handleClick} />
                                <Square sign={1} soucre={this.state.content[1]} click={this.handleClick} />
                                <Square sign={2} soucre={this.state.content[2]} click={this.handleClick} />
                                <br />
                                <Square sign={3} soucre={this.state.content[3]} click={this.handleClick} />
                                <Square sign={4} soucre={this.state.content[4]} click={this.handleClick} />
                                <Square sign={5} soucre={this.state.content[5]} click={this.handleClick} />
                                <br />
                                <Square sign={6} soucre={this.state.content[6]} click={this.handleClick} />
                                <Square sign={7} soucre={this.state.content[7]} click={this.handleClick} />
                                <Square sign={8} soucre={this.state.content[8]} click={this.handleClick} />
                                <br />
                                <button onClick={this.reset} width={100} >Restart</button>  
                            </td>
                            <td>
                                <h1 style={{color:'green'}}>{this.state.result}</h1>
                                <h2 style={{color:'yellow', fontSize:'50px'}}>SCORE</h2>
                                <h3 className='scoreTitle' ><span style={{margin:'25px'}}>O</span> <span style={{margin:'25px'}}>X</span></h3>
                                <h3 className='score' ><span style={{margin:'25px'}}>{this.state.totalO} </span> <span style={{margin:'25px'}}>{this.state.totalX}</span></h3>
                                <button className='reset' onClick={this.totalReset}>reset total</button>
                            </td>
                        </tr>
                    </tbody>
                </table>               
                
                
                
            </React.Fragment>
        )
    }

}

export default TTT;