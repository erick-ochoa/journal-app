import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView } from "../views/NoteView"
import { AddOutlined } from "@mui/icons-material"
import { NothingSelectedView } from "../views/NothingSelectedView"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../store/journal/thunks"

export const JournalPage = () => {

  const {isSaving, active} = useSelector(state => state.journal)  

  const dispatch = useDispatch()

  const onClickNewNote = () => {
    dispatch( startNewNote() )
  }

  return (
    <JournalLayout>

      {
        active == null ? <NothingSelectedView /> : <NoteView />
      }

      <IconButton
        disabled={isSaving}
        onClick={onClickNewNote}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ':hover': { backgroundColor: "error.main", opacity: .9 },
          position: "fixed",
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{fontSize: 30}}/>
      </IconButton>

    </JournalLayout>
  )
}
