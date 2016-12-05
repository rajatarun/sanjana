/**
 * Created by sanjana on 02-12-2016.
 */
import React , {Component} from 'react';
import axios from 'axios';
import tableView from './tableView';
class Table extends Component{
    constructor(){
        super();
        this.state = {
            tableData:Array.prototype
        }
    }

    componentDidMount() {
        var _this = this;
        this.serverRequest =
            axios.get(" https://dev.requiemapp.com/public/memorial/random")
                .then(function(result) {
                    _this.setState({
                        tableData: result.data.data
                    });
                })
    }
    componentWillUnmount() {
        this.serverRequest.abort();
    }

    render(){
        return(this.getTemplate());
    }
    sort(){
         function compare(a,b) {
             if(a.name && a.name.last && b.name && b.name.last) {
                 if (a.name.last < b.name.last)
                     return -1;
                 if (a.name.last > b.name.last)
                     return 1;
             }
            return 0;
        }
        this.state.tableData.sort(compare);
    }
    getTemplate(data){
        if(this.state.tableData.length !== 0) {
            return (
                <div>
                    <button className="btn btn-primary" onClick={this.sort()}>Sort Columns</button>
                    <tableView tableData={this.state.tableData} />
                </div>
            )
        }
        else{
            return(
                <table>
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                        </tr>
                    </thead>
                </table>
            )
        }
    }
}
export default Table;