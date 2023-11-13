from pymongo import MongoClient

dataBaseName = "fitness-db"
usersDBTable = "users"
trainingDBTable = "training"
resultsDBTable = "results"
sensorsDBTable = "sensors"
dataBaseURL = "ec2-18-156-114-91.eu-central-1.compute.amazonaws.com"
dataBasePort = "27017"


def getClient():
    return MongoClient("mongodb://" + dataBaseURL+":"+dataBasePort+"/")


def getUserCollection(client):
    db = client[dataBaseName]
    return db[usersDBTable]


def getTrainingCollection(client):
    db = client[dataBaseName]
    return db[trainingDBTable]


def getResultCollection(client):
    db = client[dataBaseName]
    return db[resultsDBTable]


def getSensorsCollection(client):
    db = client[dataBaseName]
    return db[sensorsDBTable]
