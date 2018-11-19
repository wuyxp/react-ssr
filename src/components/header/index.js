/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/11/14 16:47
 */
import React from 'react';
import {Link} from 'react-router-dom';

import styles from './styles.scss'
import withStyles from '../../common/withStyles'

const Header = () => {
    return (
        <ul className={styles.ul}>
            <li>
                <Link to={"/"}>工作台</Link>
            </li>
            <li>
                <Link to={"/headlines"}>发现</Link>
            </li>
            <li>
                <Link to={"/help"}>帮助</Link>
            </li>
            <li>
                <Link to={"/topics"}>反馈</Link>
            </li>

        </ul>
    )
};
export default withStyles(styles)(Header);