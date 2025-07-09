package main

import (
	"log"
	"net/http"
	"sample-api/handlers"
)

func main() {
	http.HandleFunc("/api/items", handlers.HandleItems)

	http.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("OK"))
	})

	log.Println("Server starting on http://localhost:8080")
	log.Println("Items API: http://localhost:8080/api/items")
	log.Println("Health check: http://localhost:8080/health")

	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal("Server failed to start:", err)
	}
}
