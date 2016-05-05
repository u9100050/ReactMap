/**
 * Created by NekrasovAA on 05.05.2016.
 */
'use strict';
import React from 'react';
import {connect} from 'react-redux';
import List from '../components/List/list';
import d3 from 'd3';

class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="sideBar">
                    <List regs={regs}/>
                </div>
                <div className="mainContent">
                    <div className="map">MAP</div>
                    <div className="info">INFO</div>
                </div>
            </div>
        )
    }
};
Main.propTypes = {
  regs:()=>{
      let regs=[];
      d3.tsv("./data/russia-region-names.tsv", (d)=> {
          regs = d;
      });
      return regs;
  },
  selectedReg: "none"  
};

function select(state) {
    return{
        regs: state.regs,
        selectedReg: state.selectedReg
    }
}

export default connect(select)(Main);