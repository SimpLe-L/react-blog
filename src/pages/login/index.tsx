import React, { memo } from 'react';
import ParticlesBg from 'particles-bg';
import LoginMain from './login-layout/loginMain';
import './index.less';
interface IProps{

}

const Login: React.FC<IProps> = (props) => {
    return (
        
        <div className="login">
            <div className="login-layout">
                <LoginMain loading={false} />
                <ParticlesBg type="lines" bg></ParticlesBg>
            </div>
        </div>
    )
}

export default memo(Login);