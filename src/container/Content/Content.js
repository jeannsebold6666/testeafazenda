import React, {Component} from 'react';
import axios from 'axios';
import _ from 'lodash';


class Content extends Component {

  constructor(props) {
    super(props);


    this.state = {
        data:[]

    };
  }

    componentDidMount() {
        axios
        .get('../json/fazenda.json')
        .then(({ data })=> {
            
            this.setState({data: data.data});
        })
        .catch((err)=> {console.log('no recibido')})
    }
    render() {
        let data = this.state.data;
        let artists = _.orderBy(data, 'negative')
        return (
        <div> 
            {artists.map((datas, index)  =>
                <li class="ranking-item">
                    <div class="ranking-frame-position">
                        <h2 class="ranking-text">{index}</h2>
                    </div>
                    <div class="ranking-frame">
                        <img class= "ranking-pic" src={datas.picture} alt={datas.name}/>
                    </div>
                    <div class="ranking-info">
                        <span class = "ranking-name">{datas.name}</span>
                        <br/>
                        <span class = "ranking-desc">{datas.description}</span>
                    </div>
                    <div class="ranking-tooltip">
                        <div class="tooltip-wrapper">
                            <div class="tooltip-header">
                                <h2 class="tooltip-title">GOSTAM</h2>
                                <h2 class="tooltip-title">NÃO GOSTAM</h2>
                            </div>
                            <div class="tooltip-content">
                                <span class = "tooltip-percent">{parseInt((datas.positive / (datas.positive + datas.negative) * 100), 10) } %</span>
                                <span class = "tooltip-percent">{parseInt((datas.negative / (datas.positive + datas.negative) * 100), 10) } %</span>
                            </div>
                        </div>
                    </div>
                </li>
            )}    
        </div>
    );
  }
}

export default Content;