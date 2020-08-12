import React, { memo } from 'react';
import { Form, Button, Input, notification } from 'antd';
interface IProps{
    loading : Boolean,
}

const loginMain: React.FC<IProps> = (props) => {

    const { Item } = Form;
    return (
        <div className="login-layout-main">
            <div className="main-form">
                <h2>欢迎回家~</h2>
                <Form className="main-form-box">
                    <Item>
                        <Input placeholder="请输入用户名" />
                    </Item>
                    <Item>
                        <Input type="password" placeholder="请输入密码" />
                    </Item>
                    <Item>
                        <Button>登录</Button>
                    </Item>
                    <Item>
                        <div className="main-form-other">
                        <p>其他登录方式</p>
                        <div className='any'>
                            <span>QQ</span>
                            <span>微信</span>
                            <span>GitHub</span>
                        </div>
                        </div>
                    </Item>
                </Form>
            </div>
        </div>
    )
}

export default memo(loginMain);