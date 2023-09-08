import {useState, useEffect} from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'
import { useNavigate } from 'react-router-dom'

const CreateBook = () => {
  const [title,setTitle] = useState('');
  const [author,setAuthor] = useState('');
  const [loading,setLoading] = useState(false);
  const [puplishYear,setPuplishYear] = useState('');
  const navigate = useNavigate();
  const handleSaveBook = () =>{
    const data ={
      title,
      author,
      puplishYear,
    }
    setLoading(true);
    axios.post('http://localhost:5555/books', data).then(()=>{
      setLoading(false)
      navigate('/')
    }).catch((err=>{
      setLoading(false)

      // alert('An error happend')
      console.log(err);
    }))
  }
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className="text-3xl my-4">Create Book</h1>
      {loading ? <Spinner />:''}
      <div className='flex flex-col bottom-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className="my-4">
          <label  className="text-xl mr-4 text-gray-500">Title</label>
          <input type="text"
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full' />
        </div>
        <div className="my-4">
          <label  className="text-xl mr-4 text-gray-500">Author</label>
          <input type="text"
          value={author}
          onChange={(e)=> setAuthor(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full' />
        </div>
        <div className="my-4">
          <label  className="text-xl mr-4 text-gray-500">Puplish Year</label>
          <input type="text"
          value={puplishYear}
          onChange={(e)=> setPuplishYear(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full' />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}>
          Save
        </button>
      </div>
    </div>
  )
}

export default CreateBook