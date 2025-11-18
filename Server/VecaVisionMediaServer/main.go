package main

import (
	"fmt"
	"os"
	"log"
	"net/http"
	"github.com/resend/resend-go/v3"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

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


		params := &resend.SendEmailRequest {
			From:		"Veca Vision Media <noreply@vecavisionmedia.com>",
			To:			[]string{vvmEmail},
			Html:		"<tag></tag>",
			Subject:	"New Contact Request from ",
			Cc:			[]string{"asdfadsf@asdfadf.com"},
			Bcc:		[]string{"asdfadsf@asdfadf.com"},
			ReplyTo:	"asdfasdf@asdfadf.com",
		}

		sent, err := client.Emails.Send(params)
		if err != nil {
			fmt.Println(err.Error())
			return
		}

		c.JSON(http.StatusOK, gin.H{
			"message": sent.Id,
		})
	})
}

