import React from 'react';
import './style.css';
import { Button, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material';
import Loader from "react-loader-spinner";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function LoginView({ setToken }) {
    const [showPassword, setShowPassword] = React.useState(false);
    const [password, setPassword] = React.useState(undefined);
    const [userName, setUserName] = React.useState(undefined);
    const [error, setError] = React.useState(undefined);
    const [loading, setLoading] = React.useState(false);

    const onSubmitLogin = () => {
        localStorage.setItem('token', "TOKENString");
        setToken("TOKENString");
    };

    return (
        <div style={{ height: "100vh", width: "100vw" }}>
            {loading && <Loader
                type="Circles"
                style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                alignItems="center"
                color="#00A273"
                height={100}
                width={100}
            />}
            {!loading &&
                <>
                    <div className="form-wrapper" style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                        <Typography style={{ marginBottom: "25px", fontSize: "25px", fontWeight: "bolder" }}> Login </Typography>
                        <div className="login-parameters" >
                            <FormControl variant="outlined">
                                <InputLabel>Username</InputLabel>
                                <OutlinedInput
                                    id="username"
                                    label="Username"
                                    value={userName}
                                    onKeyDown={(event) => {
                                        if (event.key == "Enter") {
                                            onSubmitLogin();
                                        }
                                    }}
                                    onChange={event => setUserName(event.target.value)}
                                    variant="outlined"
                                    error={userName === ""}
                                    helperText={userName === "" ? 'Username should not be empty!' : ' '}
                                    required
                                />
                                {userName === "" &&
                                    <FormHelperText error id="accountId-error">
                                        Username should not be empty
                                    </FormHelperText>
                                }
                            </FormControl>
                        </div>

                        <div className="login-parameters form-password-field">
                            <FormControl variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="password"
                                    label="Password"
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onKeyDown={(event) => {
                                        if (event.key == "Enter") {
                                            onSubmitLogin();
                                        }
                                    }
                                    }
                                    onChange={event => setPassword(event.target.value)}
                                    error={password === ""}
                                    helperText={password === "" ? 'Password should not be empty!' : ' '}
                                    required
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => setShowPassword(!showPassword)}
                                                edge="end"
                                            >
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }

                                />
                                {password === "" &&
                                    <FormHelperText error id="accountId-error">
                                        Password should not be empty
                                    </FormHelperText>
                                }
                            </FormControl>
                        </div>
                        <Button
                            type="submit"
                            variant="contained"
                            onClick={onSubmitLogin}
                            className="green-btn">
                            Login
                        </Button>
                    </div>
                </>
            }
        </div>
    );
};