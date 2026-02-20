import React, { useState } from "react";
import {
    Stepper,
    Step,
    StepLabel,
    Button,
    TextField,
    MenuItem,
    Box,
    Typography,
    Paper,
} from "@mui/material";
import { useForm } from "react-hook-form";

const steps = [
    "Personal Info",
    "Academic Details",
    "Documents Upload",
    "Payment",
];

export default function Admission() {
    const [activeStep, setActiveStep] = useState(0);
    const [selectedProgram, setSelectedProgram] = useState("");

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const programType = watch("programType");

    const handleNext = () => {
        setActiveStep((prev) => prev + 1);
    };

    const handleBack = () => {
        setActiveStep((prev) => prev - 1);
    };

    const onSubmit = (data) => {
        console.log(data);
        alert("Application Submitted Successfully 🎉");
    };

    return (
        <Box className="min-h-screen bg-gray-100 py-10 px-4">
            <Paper elevation={4} className="max-w-5xl mx-auto p-8 rounded-xl">

                <Typography variant="h4" align="center" gutterBottom>
                    Tech College Admission
                </Typography>

                {/* Stepper */}
                <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 5 }}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* STEP 1 - PERSONAL */}
                    {activeStep === 0 && (
                        <Box className="grid md:grid-cols-2 gap-6">
                            <TextField
                                label="Full Name"
                                fullWidth
                                {...register("fullName", { required: true })}
                                error={!!errors.fullName}
                            />
                            <TextField
                                label="Email"
                                fullWidth
                                {...register("email", { required: true })}
                                error={!!errors.email}
                            />
                            <TextField
                                label="Phone"
                                fullWidth
                                {...register("phone", { required: true })}
                                error={!!errors.phone}
                            />
                            <TextField
                                label="Date of Birth"
                                type="date"
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                                {...register("dob", { required: true })}
                            />
                        </Box>
                    )}

                    {/* STEP 2 - ACADEMIC */}
                    {activeStep === 1 && (
                        <Box className="grid md:grid-cols-2 gap-6">

                            <TextField
                                select
                                label="Program Level"
                                fullWidth
                                {...register("programType", { required: true })}
                                onChange={(e) => setSelectedProgram(e.target.value)}
                            >
                                <MenuItem value="bachelor">Bachelor Degree</MenuItem>
                                <MenuItem value="master">Master Degree</MenuItem>
                                <MenuItem value="phd">PhD</MenuItem>
                            </TextField>

                            <TextField
                                label="10th Percentage"
                                fullWidth
                                {...register("tenth", { required: true })}
                            />

                            <TextField
                                label="12th Percentage"
                                fullWidth
                                {...register("twelfth", { required: true })}
                            />

                            {/* If Master or PhD */}
                            {(programType === "master" || programType === "phd") && (
                                <TextField
                                    label="Bachelor Degree Percentage"
                                    fullWidth
                                    {...register("bachelorMarks", { required: true })}
                                />
                            )}

                            {/* If PhD */}
                            {programType === "phd" && (
                                <TextField
                                    label="Master Degree Percentage"
                                    fullWidth
                                    {...register("masterMarks", { required: true })}
                                />
                            )}
                        </Box>
                    )}

                    {/* STEP 3 - DOCUMENTS */}
                    {activeStep === 2 && (
                        <Box className="space-y-4">

                            <Typography variant="h6">Upload Required Documents</Typography>

                            <input type="file" {...register("doc10", { required: true })} />
                            <input type="file" {...register("doc12", { required: true })} />

                            {(programType === "master" || programType === "phd") && (
                                <input
                                    type="file"
                                    {...register("bachelorDoc", { required: true })}
                                />
                            )}

                            {programType === "phd" && (
                                <input
                                    type="file"
                                    {...register("masterDoc", { required: true })}
                                />
                            )}

                            <input
                                type="file"
                                {...register("idProof", { required: true })}
                            />
                        </Box>
                    )}

                    {/* STEP 4 - PAYMENT */}
                    {activeStep === 3 && (
                        <Box className="space-y-4">

                            <Typography variant="h6">
                                Application Fee: ₹1500
                            </Typography>

                            <TextField
                                select
                                label="Payment Method"
                                fullWidth
                                {...register("paymentMethod", { required: true })}
                            >
                                <MenuItem value="upi">UPI</MenuItem>
                                <MenuItem value="card">Card</MenuItem>
                                <MenuItem value="netbanking">Net Banking</MenuItem>
                            </TextField>

                            <TextField
                                label="Transaction ID"
                                fullWidth
                                {...register("transactionId", { required: true })}
                            />

                            <Typography>Upload Payment Screenshot</Typography>
                            <input
                                type="file"
                                {...register("paymentProof", { required: true })}
                            />
                        </Box>
                    )}

                    {/* Buttons */}
                    <Box className="flex justify-between mt-8">
                        {activeStep > 0 && (
                            <Button onClick={handleBack}>Back</Button>
                        )}

                        {activeStep < steps.length - 1 ? (
                            <Button variant="contained" onClick={handleNext}>
                                Next
                            </Button>
                        ) : (
                            <Button type="submit" variant="contained" color="success">
                                Submit Application
                            </Button>
                        )}
                    </Box>

                </form>
            </Paper>
        </Box>
    );
}