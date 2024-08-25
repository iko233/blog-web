import {Card, Divider} from "antd";


export default async function Home({ params }) {
    const { id } = params;
    const res = await fetch(`http://127.0.0.1:8080/post/${id}/detail`);
    const responseJson = await res.json();
    const data = responseJson?.data;

    return (
        <main>
            <Card bordered={true} style={{marginBottom: '20px'}}>
                <span style={{float: 'left'}}><h2>{data.title}</h2></span>
                {/*<span style={{float: 'right'}}>{data.updateTime}</span>*/}
                <Divider/>
                <span>{data.content}</span>
            </Card>
        </main>
    );
}



