 import { useForm } from "react-hook-form"
import styles from "./Form.module.css"
import Card from "../Card/Card"

interface FormData {
    name:string,
    email: string,
    phone : string,
    studentName : string,
    studentAge : string,
    program: string,
    message : string
}

const Form = () => {
const {register,handleSubmit, formState : {errors}} = useForm<FormData>()
const onSubmit = (data : FormData) => {console.log(data)}
  return (
    <Card className={styles.cardForm}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}> 
      <div className={styles.containerInputs}>
        <div className={styles.group}>
            <label>Parent Name</label>
            <input placeholder="Enter Parent Name" {...register("name" , {required : "name is required"})}/> {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div className={styles.group}>
            <label>Email Address</label>
            <input placeholder="Enter Email Address" {...register("email" , {required : "email is required"})}/> {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className={styles.group}>
            <label>Phone Number</label>
            <input placeholder="Enter Phone Number" {...register("phone" , {required : "phone is required"})}/> {errors.phone && <p>{errors.phone.message}</p>}
        </div>
        <div className={styles.group}>
            <label>Student Name</label>
            <input placeholder="Enter Student Name" {...register("studentName" , {required : "student name is required"})}/> {errors.studentName && <p>{errors.studentName.message}</p>}
        </div>
        <div className={styles.group}>
            <label>Student Age</label>
            <input placeholder="Enter Student Age" {...register("studentAge" , {required : "student age is required"})}/> {errors.studentAge && <p>{errors.studentAge.message}</p>}
        </div>
        <div className={styles.group}>
            <label>Program of Intrest</label>
          <select {...register("program" , {required : "select program"})}>
           <option value="" disabled>select a program</option>
           <option value="programone">program</option>
           <option value="programtwo">program2</option>
           <option value="programthree">program3</option>
          </select>
        </div>
      </div>
      <div className={styles.message}>
        <label>Message</label>
        <textarea placeholder="Enter your Message" rows={5} {...register("message")}></textarea>
      </div>
      <button className={styles.btn} type="submit">Submit</button>
      </form>
        <div className={styles.social}>
         <div className={styles.backgroundIcon}><img src="/assets/img/face.png" /></div>
         <div className={styles.backgroundIcon}><img src="/assets/img/tweet.png" /></div>
         <div className={styles.backgroundIcon}><img src="/assets/img/linked.png" /></div>
        </div>
    </Card>
  )
}

export default Form
