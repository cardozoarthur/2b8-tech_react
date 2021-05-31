import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'antd';
import MenuItem from './MenuItem';

import stethoscope from '../../assets/stethoscope.png'
import computer from '../../assets/computer.png'
import hospital from '../../assets/hospital.png'
import whatsapp from '../../assets/whatsapp.png'
import config from '../../assets/config.png'
import { MenuWrapper } from './styles';
import { Logo } from './Logo/styles';
import { Link } from 'react-router-dom';
import User from '../../helpers/User';

export default function Menu({children}) {
    const [collapsed, setCollapsed] = useState(false);
    const onCollapseClick = () => {
        if (window.screen.width < 576) {
            setCollapsed(!collapsed);
        }
    }

    useEffect(() => {
        if ("geolocation" in navigator) {
            console.log("Available");
        } else {
            console.log("Not Available");
        }
        window.addEventListener('resize', (e) => {
            if (window.screen.width > 576) {
                setCollapsed(false);
            }
        })
    }, []);
    return (
        <Row>
            <MenuWrapper data-collapsed={collapsed} xs={collapsed ? 2 : 24} sm={collapsed ? 2 : 24} md={collapsed ? 2 : 4}>
                <Logo collapsed={collapsed} onClick={onCollapseClick} />
                {!collapsed &&
                    (
                    <>
                        <div className="MenuItemGroup">
                            <MenuItem to="/form" iconUri={stethoscope} text="Pré Diagnóstico" />
                            <MenuItem to="/" iconUri={computer} text="Guia Rápido - Informações" />
                        </div>
                        <div className="MenuItemGroup">
                            <MenuItem to="/map" iconUri={hospital} text="UPA Mais Próxima" />
                            <MenuItem iconUri={whatsapp} text="Fale Conosco" />
                        </div>
                        <div className="MenuItemGroup">
                            <MenuItem iconUri={config} text="Perfil" />
                        </div>
                        <div className="MenuItemExit">
                            <Link to="/signin"><Button onClick={() => {User.signout()}}>Sair</Button></Link>
                        </div>
                    </>
                    )
                }
            </MenuWrapper>
            <Col style={{maxWidth: '80%'}} xs={collapsed ? 22 : 0} sm={collapsed ? 22 : 0} md={collapsed ? 22 : 20}>
                {children}
            </Col>
        </Row>
    )
}