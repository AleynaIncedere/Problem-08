// Statik değerleri alın ve prop'ları kullanarak dinamik hale getirin
// Örneğin: label id, label text, input placeholder, input description
function FormInput({ labelId, labelText, inputType, placeholder, description }) {
  return (
    <div className='max-w-sm p-8'>
      <label
        htmlFor={labelId}
        className='block text-sm font-medium leading-6 text-gray-900'
      >
        {labelText}
      </label>
      <div className='mt-2'>
        <input
          id={labelId}
          name={labelId}
          type={inputType}
          placeholder={placeholder}
          className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2'
        />
      </div>
      <p className='mt-2 text-sm text-gray-500'>
        {description}
      </p>
    </div>
  );
}

export default function App() {
  return (
    <form>
      <FormInput 
        labelId="email"
        labelText="Email"
        inputType="email"
        placeholder="you@example.com"
        description="Bunu sadece spam için kullanacağız."
      />
      <FormInput 
        labelId="username"
        labelText="Kullanıcı Adı"
        inputType="text"
        placeholder="Kullanıcı adınızı girin"
        description="Bu, hesabınızı tanımlamak için kullanılacak."
      />
    </form>
  );
}
