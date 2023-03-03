import { Box } from '@mui/material'
import useTimer from '../hooks/useTimer'
import './styles.css'
import FavoriteIcon from '@mui/icons-material/Favorite';

type QuizHeaderProps={
  score:number,
  liveCount:number
}

const QuizHeader = ({score,liveCount}:QuizHeaderProps) => {
  const {minutes,seconds } = useTimer(3);
  return (                 
    <div className='header'>
    <Box sx={{fontWeight:"bold",fontSize:"24px"}}>{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</Box>
    <Box sx={{display:"flex",alignItems:"center"}}>
       { liveCount>=0&& [...Array(liveCount)].fill(0).map((_,index)=>{
        return (
          <FavoriteIcon key={index} />
        )
       })}
      <p>{score}</p></Box>
    </div>
  )
}

export default QuizHeader