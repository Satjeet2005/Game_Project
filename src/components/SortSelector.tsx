
import { Button, Menu, Portal } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'


interface Sort{
    handleSSortSelect: (order : string) => void
    selectedOrder : string
}
const SortSelector = ({ handleSSortSelect,selectedOrder } : Sort) => {

    const SortOrders = [
        {value : "", label: "Relevance"},
        {value : "-added", label: "Date added"},
        {value: "name", label: "Name"},
        {value: "-released", label: "Release date"},
        {value: "-metacritic", label: "Popularity"},
        {value: "-rating", label: "Average rating"}
    ]

    const currentOrder = SortOrders.find((sortOrder) => sortOrder.value === selectedOrder)
  return (
        <Menu.Root >
          <Menu.Trigger>
            <Button variant="outline" size="sm">
              Order by: {currentOrder?.label || "Relevance"} <BsChevronDown></BsChevronDown>
            </Button>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                {SortOrders.map((sortOrder) => <Menu.Item onClick={()=> handleSSortSelect(sortOrder.value)} key={sortOrder.value}>{sortOrder.label}</Menu.Item>)}
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
  )
}

export default SortSelector