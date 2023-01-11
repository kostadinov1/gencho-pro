// import 'antd/dist/reset.css';
import { Link, Route, Routes } from 'react-router-dom';
import React from 'react';
import { Layout, Menu, ConfigProvider } from 'antd';
import Home from './components/Home/Home';
import { faAt, faHouseChimney,  faSquarePollVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GithubOutlined } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;

const App = () => {
  
const items =[
  {
                key: 1,
                label: <Link to='/'>Home</Link>,
                icon:<FontAwesomeIcon
                className='menu-icon'
                icon={faHouseChimney} 
                />
              },
              {
                key: 2,
                label: <Link to='/projects'>Projects</Link>,
                icon:<FontAwesomeIcon icon={faSquarePollVertical} />
              },
              {
                key: 3,
                label: <a href='https://github.com/kostadinov1' >GitHub</a>,
                icon: <GithubOutlined></GithubOutlined>
              },
              {
                key: 4,
                label: <Link to='/contacts'>Contacts</Link>,
                icon:<FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
              },
            ]

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FF8900',
        },
      }}
    >
    <Layout className="layout">
      <Header>
      <div className="logo" >
        <img
        width={170}
        height={50}
        src='/images/logos/gpro-logo-1.png' 
        alt='logo'/>
      </div> 
      
        <div  />
        <Menu
          style={{fontFamily: 'Verdana', color: '#57fc01', }}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items}
          />
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <Routes >
          {/* Menu */}
          <Route path='/' element={<Home />}/>
        </Routes>

  
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
    </ConfigProvider>

  );
};
export default App;
