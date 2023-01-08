

import { Link, Route, Routes } from 'react-router-dom';
import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Home from './components/Home/Home';
const { Header, Content, Footer } = Layout;

const items =[
  {
                key: 1,
                label: <Link to='/'>Home</Link>,
                // icon:<FontAwesomeIcon icon={faHouseChimney} />
              },
              {
                key: 2,
                label: <Link to='/projects'>Projects</Link>,
                // icon:<FontAwesomeIcon icon={faDiagramProject}></FontAwesomeIcon>
              },
            ]
const App = () => {
  

  return (
    <Layout className="layout">
      <Header>
      <div style={{float: 'left'}}>
        <h1 style={{color: 'white', fontSize: '50px',fontFamily: 'Kanit', marginTop: '-6px'}}>gencho.pro</h1>
        {/* <img
        width={96}
        height={54}
        src='/logo192.png' 
        alt='logo'/> */}
      </div> 
      
        <div className="logo" />
        <Menu
          style={{fontSize: '35px', fontFamily: 'Verdana', color: 'orange', paddingLeft: '200px'}}
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
  );
};
export default App;


// import { Link, Route, Routes } from 'react-router-dom';
// import React from 'react';
// import { Breadcrumb, Layout, Menu, theme } from 'antd';
// const { Header, Content, Footer } = Layout;

// const items =[
//   {
//                 key: 1,
//                 label: <Link to='/'>Home</Link>,
//                 // icon:<FontAwesomeIcon icon={faHouseChimney} />
//               },
//               {
//                 key: 2,
//                 label: <Link to='/projects'>Projects</Link>,
//                 // icon:<FontAwesomeIcon icon={faDiagramProject}></FontAwesomeIcon>
//               },
//             ]
// const App = () => {
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();
//   return (
//     <Layout className="layout">
//       <Header>
//       <div style={{}}>
//         <img src='' 

//         alt='logo'/>
//       </div>
// {/*         
//         <div className="logo" /> */}
//         <Menu
//           theme="dark"
//           mode="horizontal"
//           defaultSelectedKeys={['1']}
//           items={items}
//           />
//       </Header>
//       <Content
//         style={{
//           padding: '0 50px',
//         }}
//       >
//         <Breadcrumb
//           style={{
//             margin: '16px 0',
//           }}
//         >
//           <Breadcrumb.Item>Home</Breadcrumb.Item>
//           <Breadcrumb.Item>List</Breadcrumb.Item>
//           <Breadcrumb.Item>App</Breadcrumb.Item>
//         </Breadcrumb>
//         <div
//           className="site-layout-content"
//           style={{
//             background: colorBgContainer,
//           }}
//         >
//         <Routes >
//           {/* Menu */}
//           {/* <Route path='/' element={<Home />}/> */}
//         </Routes>

//         </div>
//       </Content>
//       <Footer
//         style={{
//           textAlign: 'center',
//         }}
//       >
//         Ant Design ©2018 Created by Ant UED
//       </Footer>
//     </Layout>
//   );
// };
// export default App;

