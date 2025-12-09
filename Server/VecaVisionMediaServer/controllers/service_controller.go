package controllers

import (
	"context"
	"net/http"
	"time"

	database "github.com/BillyCWood/vecavisionmedia2.0/Server/VecaVisionMediaServer/database"
	"github.com/BillyCWood/vecavisionmedia2.0/Server/VecaVisionMediaServer/models"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/v2/bson"
	"go.mongodb.org/mongo-driver/v2/mongo"
	"go.mongodb.org/mongo-driver/v2/mongo/options"
)

var serviceCollection *mongo.Collection = database.OpenCollection("ServiceInfo")

func GetAllServices() gin.HandlerFunc {
	return func(c *gin.Context){
		ctx, cancel := context.WithTimeout(context.Background(), 100*time.Second)
		defer cancel()

		var services []models.Service
		
		filter := bson.D{}
		opts := options.Find().SetProjection(bson.D{{"name", 1}, {"summary", 1}, {"slug", 1}, {"description", 1}, {"position", 1}}).SetSort(bson.D{{"position", 1}})
		cursor, err := serviceCollection.Find(ctx, filter, opts)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error":"Failed to fetch services"})
		}

		defer cursor.Close(ctx)

		if err = cursor.All(ctx, &services); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error":"Failed to fetch services"})
		}

		c.JSON(http.StatusOK, services)

	}
}

func GetService() gin.HandlerFunc {
	return func (c *gin.Context) {
		slug := c.Param("slug")
		ctx, cancel := context.WithTimeout(context.Background(), 100*time.Second)
		defer cancel()

		var service models.Service

		err := serviceCollection.FindOne(ctx, bson.M{"slug": slug}).Decode(&service)
		if err != nil {
			c.JSON(http.StatusNotFound, gin.H{"error":"Service not found"})
		}
		c.JSON(http.StatusOK, service)
	}
}

