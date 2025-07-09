package models

type Item struct {
	ID    int    `json:"id"`
	Name  string `json:"name"`
	Price int    `json:"price"`
}

func GetItems() []Item {
	return []Item{
		{ID: 1, Name: "Item 1", Price: 100},
		{ID: 2, Name: "Item 2", Price: 200},
		{ID: 3, Name: "Item 3", Price: 300},
	}
}
