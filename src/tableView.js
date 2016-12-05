/**
 * Created by raja on 04-12-2016.
 */
import React,{Component} from 'react';

class tableView extends Component{
    constructor(props){
        super()
    }
    render(){
        return(<table className="table">
            <tr className="row">
                <th className="col-md-1">Name</th>
                <th className="col-md-2">Phone</th>
                <th className="col-md-4">Message</th>
                <th className="col-md-1">Share</th>
            </tr>
            <tbody>
            {this.props.tableData.map(function (name, index) {
                return name?(name.name?<tr className="row"><td className="col-md-1">{(name.name.first + ' ' + name.name.last)}</td>
                    <td className="col-md-2">{name.deceasedPhone}</td>
                    <td className="col-md-4">{name.messagePreface}</td><td><button className="form-control btn-primary" value="Share"><a href={name.shareUrl} className="link">Share</a></button></td></tr>:''):'';
            })}

            </tbody>
        </table>)
    }
}
export default tableView;