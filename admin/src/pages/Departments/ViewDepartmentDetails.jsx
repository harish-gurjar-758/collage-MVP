import React, { useEffect, useState } from "react";
import { Card, Flex, message, Spin } from "antd";
import { useParams } from "react-router-dom";
import { getDepartmentByIdApi } from "../../utils/Apis/Apis";

export default function ViewDepartmentDetails() {
    const { id } = useParams(); // ✅ Get id from URL
    const [departmentData, setDepartmentData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getDepartmentData = async () => {
            try {
                setLoading(true);
                const res = await getDepartmentByIdApi(id);
                setDepartmentData(res.data);
            } catch (error) {
                message.error(error.message || "Failed to fetch department");
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            getDepartmentData();
        }
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <Spin size="large" />
            </div>
        );
    }

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <Flex justify="center">
                <Card
                    className="w-full max-w-3xl shadow-xl rounded-2xl"
                    title={departmentData?.departmentName || "Department Details"}
                >
                    <p><strong>Head:</strong> {departmentData?.head || "Not Assigned"}</p>
                    <p><strong>Total Teachers:</strong> {departmentData?.totalTeachers || 0}</p>
                </Card>
            </Flex>
        </div>
    );
}