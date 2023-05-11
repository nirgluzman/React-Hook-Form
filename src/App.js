import { useForm } from 'react-hook-form';

import './App.css';

function App() {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm({
    defaultValues: {
      username: 'Bob',
      password: '123',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>
        <input
          {...register('username', { required: 'This field is required' })}
          placeholder='username'
          type='text'
        />
      </p>
      {errors.username?.message}
      <p>
        <input
          {...register('password')}
          placeholder='password'
          type='password'
        />
      </p>
      <p>{watch('username')}</p>
      <input type='submit' />
    </form>
  );
}

export default App;
