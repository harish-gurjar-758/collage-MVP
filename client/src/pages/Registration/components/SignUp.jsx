import React, { useState } from "react";
import {
    Box,
    TextField,
    Alert,
    AlertTitle,
    Stepper,
    Step,
    StepLabel,
    StepConnector
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { stepConnectorClasses } from "@mui/material/StepConnector";
import Check from "@mui/icons-material/Check";

import { PiStudentFill } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { registerApi } from "../../../Apis/Apis";

export default function SignUp() {
    const [step, setStep] = useState(1);
    const [success, setSuccess] = useState(false);

    const [userData, setUserData] = useState({
        fullName: {
            firstName: "",
            lastName: "",
        },
        email: "",
        password: "",
        phone: "",
        role: "",
        department: "",
        semester: "",
        subjects: "",
    });

    const steps = ["Select Role", "Basic Details", "Additional Info"];

    // ===== Custom Connector =====
    const ColorlibConnector = styled(StepConnector)(() => ({
        [`&.${stepConnectorClasses.alternativeLabel}`]: {
            top: 22,
        },
        [`&.${stepConnectorClasses.active}`]: {
            [`& .${stepConnectorClasses.line}`]: {
                backgroundColor: "#1976d2",
            },
        },
        [`&.${stepConnectorClasses.completed}`]: {
            [`& .${stepConnectorClasses.line}`]: {
                backgroundColor: "#1976d2",
            },
        },
        [`& .${stepConnectorClasses.line}`]: {
            height: 3,
            border: 0,
            backgroundColor: "#e0e0e0",
            borderRadius: 1,
        },
    }));

    // ===== Custom Step Icon =====
    const ColorlibStepIconRoot = styled("div")(({ ownerState }) => ({
        backgroundColor:
            ownerState.completed || ownerState.active ? "#1976d2" : "#ccc",
        zIndex: 1,
        color: "#fff",
        width: 40,
        height: 40,
        display: "flex",
        borderRadius: "50%",
        justifyContent: "center",
        alignItems: "center",
    }));

    function ColorlibStepIcon(props) {
        const { active, completed, className } = props;

        return (
            <ColorlibStepIconRoot
                ownerState={{ completed, active }}
                className={className}
            >
                {completed ? <Check /> : props.icon}
            </ColorlibStepIconRoot>
        );
    }

    // ===== Handle Input =====
    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "firstName" || name === "lastName") {
            setUserData({
                ...userData,
                fullName: {
                    ...userData.fullName,
                    [name]: value,
                },
            });
        } else {
            setUserData({
                ...userData,
                [name]: value,
            });
        }
    };

    // ===== Submit =====
    const handleSubmit = async () => {
        try {
            await registerApi(userData);
            setSuccess(true);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center px-6">

            {/* ===== Stepper ===== */}
            <Stepper
                alternativeLabel
                activeStep={step - 1}
                connector={<ColorlibConnector />}
                className="w-full max-w-[700px] mb-10"
            >
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={ColorlibStepIcon}>
                            {label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>

            {success && (
                <Alert severity="success" className="mb-6">
                    <AlertTitle>Success</AlertTitle>
                    Registration Successful!
                </Alert>
            )}

            {/* ===== Step 1 - Role Selection ===== */}
            {step === 1 && (
                <div className="flex gap-10">
                    <div
                        onClick={() => {
                            setUserData({ ...userData, role: "student" });
                            setStep(2);
                        }}
                        className="w-[220px] h-[130px] border flex items-center justify-center gap-4 shadow-[1px_0_10px_#808080] rounded cursor-pointer hover:scale-105 transition"
                    >
                        <PiStudentFill className="text-3xl" />
                        <h3 className="text-xl">Student</h3>
                    </div>

                    <div
                        onClick={() => {
                            setUserData({ ...userData, role: "teacher" });
                            setStep(2);
                        }}
                        className="w-[220px] h-[130px] border flex items-center justify-center gap-4 shadow-[1px_0_10px_#808080] rounded cursor-pointer hover:scale-105 transition"
                    >
                        <GiTeacher className="text-3xl" />
                        <h3 className="text-xl">Teacher</h3>
                    </div>
                </div>
            )}

            {/* ===== Step 2 - Basic Details ===== */}
            {step === 2 && (
                <Box className="flex flex-col gap-4 w-full max-w-[400px]">
                    <TextField
                        label="First Name"
                        name="firstName"
                        value={userData.fullName.firstName}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Last Name"
                        name="lastName"
                        value={userData.fullName.lastName}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                    />

                    <div className="flex justify-between mt-4">
                        <button
                            onClick={() => setStep(1)}
                            className="px-4 py-2 bg-gray-400 text-white rounded"
                        >
                            Back
                        </button>

                        <button
                            onClick={() => setStep(3)}
                            className="px-4 py-2 bg-blue-600 text-white rounded"
                        >
                            Next
                        </button>
                    </div>
                </Box>
            )}

            {/* ===== Step 3 - Role Based Fields ===== */}
            {step === 3 && (
                <Box className="flex flex-col gap-4 w-full max-w-[400px]">
                    {userData.role === "student" && (
                        <>
                            <TextField
                                label="Department"
                                name="department"
                                value={userData.department}
                                onChange={handleChange}
                            />
                            <TextField
                                label="Semester"
                                name="semester"
                                value={userData.semester}
                                onChange={handleChange}
                            />
                        </>
                    )}

                    {userData.role === "teacher" && (
                        <TextField
                            label="Subjects"
                            name="subjects"
                            value={userData.subjects}
                            onChange={handleChange}
                        />
                    )}

                    <div className="flex justify-between mt-4">
                        <button
                            onClick={() => setStep(2)}
                            className="px-4 py-2 bg-gray-400 text-white rounded"
                        >
                            Back
                        </button>

                        <button
                            onClick={handleSubmit}
                            className="px-4 py-2 bg-green-600 text-white rounded"
                        >
                            Register
                        </button>
                    </div>
                </Box>
            )}
        </div>
    );
}
