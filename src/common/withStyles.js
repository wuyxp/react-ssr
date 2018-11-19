/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/11/19 16:18
 */

import React, {Component} from 'react'
export default style => {

    return OldComponent => {

        class NewComponent extends Component{

            componentWillMount(){
                if(this.props.staticContext){
                    this.props.staticContext.insertCss(style);
                }
            }
            render() {
                return (
                    <OldComponent {...this.props} />
                );
            }

        }

        return NewComponent;
    }
}