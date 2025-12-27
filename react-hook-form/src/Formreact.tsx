import { useForm } from "react-hook-form";

function Formreact() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);

  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} />
        <input {...register('email')} />
        <button>Submit</button>
      </form>
    </>
  )
}

export default Formreact