import { Button, DatePicker, Form, Input, InputNumber } from "antd";
import TextArea from "antd/es/input/TextArea";
import { data } from "autoprefixer";
import { useNavigate } from "react-router-dom";
import { createBook } from "../api/api";

const AddBook = () => {
    const navigate = useNavigate()
    const onFinish = (values) => {

        let data = { ...values, pageNumber: Number(values.pageNumber) }
        console.log('Success:', data);
        createBook(data).then(data => { if (data?.id) navigate('/books') }).catch(error => console.log(error))
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className=" w-full flex justify-center md:px-32">
            <div className="fixed w-full border shadow rounded t-0 py-4 z-30 flex justify-between px-32">
                <div className="flex ">
                    <div className=" cursor-pointer" onClick={() => {
                        navigate('/books')
                    }}>{'< Quay lại bảng sách'}</div>
                </div>
                <div className=" text-xl font-medium">
                    Thêm Sách
                </div>

            </div>
            <div className="w-full mt-24">

                <Form

                    name="basic"
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <div className=" bg-white shadow rounded border">
                        <div className="w-full  md:flex   rounded p-6  ">
                            <div className="md:w-3/5">

                                <div className="w-full">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="w-full">
                                            <Form.Item
                                                label="Tiêu đề:"

                                                name="title"
                                                rules={[{ required: true, message: 'Tiêu đề sách không được bỏ trống' }]}
                                            >
                                                <Input />
                                            </Form.Item>
                                        </div>
                                        <div className="w-full">
                                            <Form.Item
                                                label="Tên tác giả:"
                                                name="writer"
                                                rules={[{ required: true, message: 'Tên tác giả không được bỏ trống!' }]}
                                            >
                                                <Input />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div>
                                        <Form.Item
                                            label="Mô tả:"
                                            name="description"
                                        >
                                            <TextArea style={{ height: 200 }} />
                                        </Form.Item>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="">

                                            <Form.Item
                                                label="Ngày phát hàng"
                                                name="releaseDate"
                                                rules={[{ required: true, message: 'Không được bỏ trống ngày phát hành' }]}
                                            >
                                               <DatePicker  className='w-full' format={'DD/MM/YYYY'} />
                                            </Form.Item>
                                        </div>
                                        <div className=" w-full">
                                            <Form.Item
                                                label="Số trang:"
                                                name="pageNumber"
                                                rules={[{ required: true, min: 1, max: 999999, message: 'Không được bỏ trống số trang' }]}
                                            >
                                                <Input type={'number'} />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div>

                                    </div>
                                </div>

                            </div>
                            <div className="md:w-2/5 md:pl-6">
                                <Form.Item
                                    label="ảnh:"
                                    name="image"
                                >
                                    <Input type="file" />
                                </Form.Item>
                            </div>
                        </div>
                        <div className="flex w-full justify-end space-x-4 pr-6 pb-4">
                            <Button className="border-red-500 hover:bg-red-500 hover:text-white">Hủy</Button>
                            <Button color=" bg-blue-100" htmlType="submit">Lưu</Button>
                        </div>

                    </div>
                </Form>

            </div>
        </div>
    )
}
export default AddBook;