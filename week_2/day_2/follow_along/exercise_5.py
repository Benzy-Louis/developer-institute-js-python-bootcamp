# Access the value of key "history"
sample_dict = {
    "class": {
        "student": {
            "name": "Mike",
            "marks": {
                "physics": 70,
                "history": 80
            }
        }
    }
}

print(sample_dict["class"]["student"]["marks"]["history"])
print(sample_dict.get("class").get("student").get("marks").get("history"))
