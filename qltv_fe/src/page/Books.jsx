import { Button, Table, Space, Tag } from "antd"
import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBooks } from "../api/api";

const Books = () => {
    const navigate = useNavigate();

    const [page, setPage] = useState(0)
    const [data, setData] = useState([])

    useEffect(() => {
        getBooks(page, 20, '').then(body => {
            if (body) {
                setData(body)
            }
        })
    }, [page])
    const columns = [
        {
            title: 'Tiêu đề',
            dataIndex: 'title',
            key: 'title',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Tác giả',
            dataIndex: 'writer',
            key: 'writer',
        },
        {
            title: 'Thể loại',
            dataIndex: 'category',
            key: 'category',
            render: (value) => (

                <Tag color={'green'} key={value}>
                    {value}
                </Tag>
            ),
        },
        {
            title: 'Ngày phát hàng',
            key: 'releaseDate',
            dataIndex: 'releaseDate',
            render: (value) => (

                <div> {value}</div>
                ),
        },
        {
            title: 'Số trang',
            dataIndex: 'pageNumber',
            key: 'pageNumber',
        },
        {
            title: 'action',
            key: 'title',
            render: (id, item) => (
                <Space size="middle">
                    <Button >Chi tiết </Button>
                    <Button type={'primary'} danger >Xóa</Button>
                </Space>
            ),
        },
    ];

    return (
        <div className="p-20">

            <div className=" w-full ">
                <div className="w-full flex justify-end"><Button
                    onClick={() => {

                        navigate('/books/add')
                    }}
                >Thêm sách</Button></div>
                <div className="w-full border rounded shadow mt-6">
                    <Table columns={columns} dataSource={data} />

                </div>
            </div>

        </div>
    )
}
export default Books