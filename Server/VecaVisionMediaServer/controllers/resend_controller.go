package controllers

import (
	"os"
	"log"
	"net/http"
	"github.com/resend/resend-go/v3"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	model "github.com/BillyCWood/vecavisionmedia2.0/Server/VecaVisionMediaServer/models"
)

func Resend(c *gin.Context) {

	err := godotenv.Load(".env")
	if err != nil {
		log.Fatal("error loading .env file: ", err)
	}


	apiKey := os.Getenv("RESEND_API")
	vvmEmail := os.Getenv("VVM_EMAIL")
	client := resend.NewClient(apiKey)
	var formData model.Email

	if err := c.ShouldBindJSON(&formData); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Bad Requeset"})
	}

	if (formData.Role != "") {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Bad Request"})
	} else {

		var batchEmails = []*resend.SendEmailRequest {
			{
				From:		"VecaVisionMedia <noreply@vecavisionmedia.com>",
				To:			[]string{vvmEmail},
				Subject:	"New Contact Request from " + formData.Name,
				Html:		"<h1>Hello</h1>",
			},
			{
				From:		"VecaVisionMedia <noreply@vecavisionmedia.com>",
				To:			[]string{formData.Email},
				Subject:	"Veca Vision Media Contact Confirmation",
				Html:		"<h1>Hello</h1>",
			},

		}


		sent, err := client.Batch.SendWithContext(c, batchEmails)
		if err != nil {panic(err)}
		c.JSON(http.StatusOK, gin.H{"message": sent.Data, })
	}
}

