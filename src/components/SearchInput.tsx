import { Input, InputGroup } from "@chakra-ui/react"
import { useRef } from "react"
import { BsSearch } from "react-icons/bs"

export interface Props{
    handleSubmit : (search : string) => void
}

const SearchInput = ({ handleSubmit } : Props) => {
    const ref = useRef<HTMLInputElement>(null);
  return (

    <form onSubmit={(event) => {event.preventDefault(); handleSubmit(ref.current ? ref.current.value : "")}}>
        <InputGroup startElement={<BsSearch></BsSearch>}>
        <Input ref={ref} placeholder="Search games..." variant="subtle" borderRadius={20}></Input>
        </InputGroup>
    </form>
  )
}

export default SearchInput