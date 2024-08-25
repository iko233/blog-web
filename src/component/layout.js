import {Layout, Menu} from "antd";
import {Content, Footer, Header} from "antd/es/layout/layout";
import Link from "next/link";

export default function Home(props) {

    return (
        <>
            <Layout>
                <Header
                    style={{
                        position: 'sticky',
                        top: 0,
                        zIndex: 1,
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                    <Link href="/">
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{flex: 1, minWidth: 0}}
                        >
                            首页
                        </Menu>
                    </Link>
                </Header>
                <Content style={{padding: '0 48px', marginTop: '20px'}}>
                    <div style={{margin: '0 auto', width: '1200px', minHeight: '1200px'}}>
                        {props.children}
                    </div>
                </Content>

            </Layout>
        </>
    )
        ;
}