import React, { Fragment } from 'react';
import Header from "../../../components/header";
import { Column, Section, Container, Card, Title } from "rbx";
import LogoImage from '../../../assets/images/logo.png';
import "../../../styles/auth.scss";
import LoginForm from "../../../components/auth/login_form";
const Login = () => (
    <Fragment>
        <Header />
        <Section size="medium" className="auth">
            <Container>
                <Column.Group centered>
                    <Column size={3}>
                        <Card>
                            <Card.Content>
                                <Section>
                                    <Column.Group centered>
                                        <Column size={12}>
                                            <img src={LogoImage} />
                                        </Column>
                                    </Column.Group>

                                    <Column.Group>
                                        <Column size={12}>
                                            <Title size={6} className="has-text-grey has-text-centered">
                                                Your notes on the cloud
                                            </Title>
                                        </Column>
                                    </Column.Group>
                                </Section>
                                 <LoginForm/>
                            </Card.Content>
                        </Card>
                    </Column>
                </Column.Group>
            </Container>
        </Section>
    </Fragment>
);

export default Login;