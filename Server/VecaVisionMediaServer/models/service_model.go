package models

import "go.mongodb.org/mongo-driver/v2/bson"


type Feature struct {
	Title		string	`json:"title"`
	Description	string	`json:"description"`
}

type Service struct {
	ServiceID	bson.ObjectID	`bson:"_id" json:"_id"`
	Name		string			`json:"name"`
	Slug		string			`json:"slug"`
	Summary		string			`json:"summary"`
	Description	string			`json:"description"`
	Features	[]Feature		`json:"features"`
	Position	int				`json:"position"`
}
