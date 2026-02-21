import React from "react";
import {
    Form,
    Input,
    Button,
    Card,
    Space,
    Divider,
    message,
} from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { createDepartmentApi } from "../../utils/Apis/Apis";
import { useNavigate } from "react-router-dom";

export default function AddDepartment() {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = async (values) => {
        try {
            await createDepartmentApi(values);
            message.success("Department Created Successfully");
            form.resetFields();
            navigate('/departments')
        } catch (error) {
            message.error(error.message || "Something went wrong");
        }
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <Card className="shadow-xl rounded-2xl">
                <h2 className="text-2xl font-bold mb-6 text-gray-700">
                    Add Department
                </h2>

                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    {/* Department Name */}
                    <Form.Item
                        label="Department Name"
                        name="departmentName"
                        rules={[{ required: true, message: "Department name required" }]}
                    >
                        <Input placeholder="Enter department name" />
                    </Form.Item>

                    <Divider>Classes / Semesters</Divider>

                    {/* Dynamic Classes */}
                    <Form.List name="classes">
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map((field, index) => (
                                    <Card
                                        key={field.key}
                                        className="mb-6 bg-gray-50 rounded-xl"
                                    >
                                        <div className="flex justify-between items-center mb-4">
                                            <h3 className="font-semibold">
                                                Semester {index + 1}
                                            </h3>
                                            <Button
                                                danger
                                                icon={<DeleteOutlined />}
                                                onClick={() => remove(field.name)}
                                            />
                                        </div>

                                        {/* Semester Number */}
                                        <Form.Item
                                            {...field}
                                            label="Semester Number"
                                            name={[field.name, "semester"]}
                                            fieldKey={[field.fieldKey, "semester"]}
                                            rules={[
                                                { required: true, message: "Semester required" },
                                            ]}
                                        >
                                            <Input type="number" placeholder="Enter semester number" />
                                        </Form.Item>

                                        <Divider>Subjects</Divider>

                                        {/* Nested Subjects */}
                                        <Form.List name={[field.name, "subjects"]}>
                                            {(subFields, { add: addSubject, remove: removeSubject }) => (
                                                <>
                                                    {subFields.map((subField) => (
                                                        <Space
                                                            key={subField.key}
                                                            align="baseline"
                                                            className="mb-3"
                                                        >
                                                            <Form.Item
                                                                {...subField}
                                                                name={[subField.name, "subjectName"]}
                                                                fieldKey={[subField.fieldKey, "subjectName"]}
                                                                rules={[
                                                                    {
                                                                        required: true,
                                                                        message: "Subject name required",
                                                                    },
                                                                ]}
                                                            >
                                                                <Input placeholder="Enter subject name" />
                                                            </Form.Item>

                                                            <Button
                                                                danger
                                                                icon={<DeleteOutlined />}
                                                                onClick={() => removeSubject(subField.name)}
                                                            />
                                                        </Space>
                                                    ))}

                                                    <Button
                                                        type="dashed"
                                                        onClick={() => addSubject()}
                                                        icon={<PlusOutlined />}
                                                    >
                                                        Add Subject
                                                    </Button>
                                                </>
                                            )}
                                        </Form.List>
                                    </Card>
                                ))}

                                <Button
                                    type="dashed"
                                    onClick={() => add()}
                                    icon={<PlusOutlined />}
                                    block
                                >
                                    Add Semester
                                </Button>
                            </>
                        )}
                    </Form.List>

                    <Divider />

                    <Button
                        type="primary"
                        htmlType="submit"
                        className="mt-4 bg-blue-600 hover:bg-blue-700"
                    >
                        Create Department
                    </Button>
                </Form>
            </Card>
        </div>
    );
}