package main

import (
	"net/http"
	"time"

	"github.com/BillyCWood/vecavisionmedia2.0/Server/VecaVisionMediaServer/controllers"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {

	router := gin.Default()

	config := cors.Config{
		AllowAllOrigins:	true,
		AllowMethods:		[]string{"GET", "POST", "PATCH"},
		AllowHeaders:		[]string{"Content-Type"},
		ExposeHeaders:		[]string{"Content-Length"},
		MaxAge:				12 * time.Hour,
	}

	router.Use(cors.New(config))
	
		
	router.POST("/api/resend", controllers.Resend)
	router.GET("/api/services", controllers.GetAllServices())
	router.GET("/api/services/:slug", controllers.GetService())

	http.ListenAndServe(":8080", router)
}

