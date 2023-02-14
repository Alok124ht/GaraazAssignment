import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Member = () => {
    const [data, setData] = useState({ brand: "", transactionType: "", totalOrders: "", totalOrderValue: "",grossMarginPercentage:"" });
    const [error, setError] = useState("");

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:5000/brand-sales-daily";
             let resp = await axios.post(url,data)
                
         console.log(resp)
                navigate("/");
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    };

    return (
        <div className={styles.member_container}>
            <div className={styles.member_form_container}>
                <div className={styles.left}>
                    <form className={styles.form_container} onSubmit={handleSubmit}>
                        <h1>Add member</h1>
                        <input
                            type="text"
                            placeholder="brand"
                            name="brand"
                            onChange={handleChange}
                            value={data.brand}
                            required
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="transactionType"
                            name="transactionType"
                            onChange={handleChange}
                            value={data.transactionType}
                            required
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="totalOrders"
                            name="totalOrders"
                            onChange={handleChange}
                            value={data.totalOrders}
                            required
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="totalOrderValue"
                            name="totalOrderValue"
                            onChange={handleChange}
                            value={data.totalOrderValue}
                            required
                            className={styles.input}
                        />

<input
                            type="text"
                            placeholder="grossMarginPercentage"
                            name="grossMarginPercentage"
                            onChange={handleChange}
                            value={data.grossMarginPercentage}
                            required
                            className={styles.input}
                        />

                        {error && <div className={styles.error_msg}>{error}</div>}
                        <button type="submit" className={styles.green_btn}>
                            Submit
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Member;