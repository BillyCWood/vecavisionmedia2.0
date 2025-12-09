package database

import (
	"fmt"
	"log"
	"os"
	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/v2/mongo"
	"go.mongodb.org/mongo-driver/v2/mongo/options"
)

func Connect() *mongo.Client{
	err := godotenv.Load(".env")
	if err != nil {
		fmt.Println("Error loading environment variables")
		log.Fatal(err)
	}

	mongoURI := os.Getenv("MONGODB_URI")
	if mongoURI == "" {
		fmt.Println("Error: MONGODB_URI is not set")
		log.Fatal(err)
	}

	clientOptions := options.Client().ApplyURI(mongoURI)

	client, err := mongo.Connect(clientOptions)

	if err != nil {
		fmt.Println("ERROR occured connecting to Mongo DB")
		log.Fatal(err)
	}
	return client
}

var Client *mongo.Client = Connect()

func OpenCollection(collectionName string) *mongo.Collection {
	err := godotenv.Load(".env")
	if err != nil {
		fmt.Println("Error loading environment variables")
		log.Fatal(err)
	}

	databaseName := os.Getenv("MONGODB_NAME")

	collection := Client.Database(databaseName).Collection(collectionName)

	if collection == nil {
		return nil
	}

	return collection
}
