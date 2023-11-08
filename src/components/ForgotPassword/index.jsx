import "./ForgotPassword.css";
import Input from "../Form/Input";
import ButtonSubmit from "../Form/ButtonSubmit";
import { Formik, Form } from "formik";
export default function ForgotPasword() {
    const handleSubmit = () => {
        console.log("cli");
    };
    return (
        <main className="container-forgotPassword">
            <div className="container_text">
                <h1>¿OLVIDASTE TU CONTRASEÑA?</h1>
                <p>
                    Ingrese su direccion de correo electronico y le enviaremos
                    un enlace para restablecer su contraseña
                </p>
            </div>
            <div className="container_form">
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <Input
                            name="forgot-password"
                            type="text"
                            content="Correo electronico"
                            placeholder="Introduce tu correo electronico"
                        />
                        <ButtonSubmit content="Continuar" />
                    </Form>
                </Formik>
            </div>
        </main>
    );
}
