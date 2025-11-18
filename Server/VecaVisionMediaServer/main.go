package main

import (
	"os"
	"log"
	"net/http"
	"github.com/resend/resend-go/v3"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

type email struct {
	Name 	string	`json:"name"`
	Email	string	`json:"email"`
	Phone 	string	`json:"phone"`
	Org		string	`json:"org"`
	Role	string	`json:"role"`
	Message	string	`json:"message"`

}
func main() {

	router := gin.Default()

	router.POST("/api/resend", func(c *gin.Context) {

		err := godotenv.Load(".env")
		if err != nil {
			log.Fatal("error loading .env file: ", err)
		}


		apiKey := os.Getenv("RESEND_API")
		vvmEmail := os.Getenv("VVM_EMAIL")
		client := resend.NewClient(apiKey)
		var formData email

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
	})

	http.ListenAndServe(":8080", router)
}

