package com.moviemanager.api.model;


import jakarta.persistence.*;


@Entity
@Table(name = "users")
public class User  {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private int age;
    private String firstName;
    private String lastName;
    private String username;

    public long getId() {
        return id;
    }


    public String getName() {
        return firstName + " " + lastName;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", age=" + age +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                '}';
    }
}
