import { nanoid } from "nanoid";
import { set, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Create = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    data.iscompleted = false;
    data.id = nanoid();
    console.log(data);

    const copytodos = [...todos]
    copytodos.push(data)
    settodos(copytodos)

    toast.success("Todo created!")

    reset()
  };

  console.log(errors)
  // let newtodo = {
  //   id: nanoid(),
  // title: title,
  //   isCompleted: false,
  // };
  // settitle("");

  // let copytodos = [...todos];
  // copytodos.push(newtodo);
  // settodos(copytodos);
  // uper wali line ka upgraded version
  // settodos([...todos,newtodo])

  return (
    <div className=" w-[60%] p-10 text-center  border-r-2 font-bold">
      <h1 className="p-10 text-8xl mt-10 mb-10">
        Create <span className="text-pink-400">Tasks</span>
      </h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          {...register("title",{required:"title cannot be empty"})}
          className="py-5 px-10 w-[60%] rounded-xl mb-10 border-b text-2xl font-thin outline-0"
          type="text"
          placeholder="title"
        />
        {errors && errors.title && (
          <small className="text-red-400 font-thin text-xl">{errors.title.message}</small>
        )}
        {/* {errors?.title?.message}  ye short form hai */ }
        <br />  
        <br />
        <button className="cursor-pointer text-2xl bg-green-700 py-2 px-15 rounded-3xl active:scale-[0.97]">
          Create Todo
        </button>
      </form>
    </div>
  );
};

export default Create;
