import React, { ChangeEvent, FormEvent, useState } from 'react'
import * as Yup from 'yup'
import { Wrapper, Container, NewsLetter, Button, Info, Contact } from './styles'
import Logo from '../../../images/logo.svg'
interface FormProps {
    email: {
        isValid: boolean
        value: string
        error: any
    }
}

const Footer: React.FC = () => {
    const [form, setForm] = useState<FormProps>({
        email: { value: '', isValid: false }
    } as FormProps)

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
    }

    const handleValidate = async () => {
        const schema = Yup.object().shape({
            email: Yup.string().email().required()
        })

        try {
            await schema.validate(
                { email: form.email.value },
                { abortEarly: false }
            )
            setForm({
                email: { error: '', isValid: true, value: form.email.value }
            })
        } catch (err) {
            setForm({
                email: {
                    isValid: false,
                    error: 'email must be a valid email',
                    value: form.email.value
                }
            })
        }
    }

    const handleForm = async ({
        target: { value }
    }: ChangeEvent<HTMLInputElement>) => {
        if (form.email.value) {
            await handleValidate()
        }
        setForm({
            email: { ...form.email, value }
        })
    }

    return (
        <Wrapper id="sign-up">
            <Container>
                <NewsLetter>
                    <p>
                        <strong>Subscribe to our newsletter</strong>
                        <br />A monthly digest of the new WOODIES products, hot
                        offers, and resources.
                    </p>

                    <form onSubmit={handleSubmit}>
                        {form.email.error && (
                            <label htmlFor="email">{form.email.error}</label>
                        )}
                        <input
                            onBlur={handleValidate}
                            placeholder="Your email address"
                            type="text"
                            id="email"
                            onChange={handleForm}
                            name="email"
                        />
                        <Button
                            name="subscribe"
                            isValid={form.email.isValid}
                            type="submit"
                            disabled={!form.email.isValid}
                        >
                            Subscribe
                        </Button>
                    </form>
                </NewsLetter>
                <Info>
                    <hr />
                    <Contact>
                        <div>
                            <Logo />
                            <strong>woodies</strong>
                        </div>
                        <span>(012) 8967453</span>
                        <span>woodies@gmail.com</span>
                        <span>São Paulo, Brasil</span>
                    </Contact>
                    <div>
                        <strong>Product</strong>
                        <a href="#">Furnitures</a>
                        <a href="#">Packages</a>
                        <a href="#">Services</a>
                    </div>
                    <div>
                        <strong>Resources</strong>
                        <a href="#">Blog</a>
                        <a href="#">FAQs</a>
                        <a href="#">Contact Us</a>
                    </div>
                    <div>
                        <strong>Company</strong>
                        <a href="#">About Us</a>
                        <a href="#">Jobs</a>
                        <a href="#">Our Team</a>
                    </div>
                    <div>
                        <strong>Follow Us</strong>
                        <a href="#">Facebook</a>
                        <a href="#">Instagram</a>
                        <a href="#">Twitter</a>
                    </div>
                </Info>
            </Container>
            <span>&copy; 2020 WOODIES</span>
        </Wrapper>
    )
}

export default Footer
