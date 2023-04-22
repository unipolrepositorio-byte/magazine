import { useState } from "react";

const useForm = (initForm) => {
    const [form, setForm] = useState(initForm);
    const handlerChangeForm = ({ target }) => {
        setForm({ ...form, [target.name]: target.value });
    }

    const handlerResetForm = () => {
        setForm(initForm);
    }
    const simpleHandler = (name, value) => {
        setForm({ ...form, [name]: value });
    }
    return {form, handlerChangeForm, handlerResetForm, simpleHandler};
}
export default useForm;