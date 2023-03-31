---
title: "Observable Pattern: An Alternative to useContext in React and React Native"
username: "kader1303"
pubDate: "Mar 11 2023"
description: "This tutorial compares two methods for maintaining data synchronization in React: the Observable Pattern and useContext. It includes examples of how to implement them, their advantages, disadvantages, and main differences."
heroImage: "https://firebasestorage.googleapis.com/v0/b/a-manyar.appspot.com/o/Banner.png?alt=media&token=1b640fc3-8a89-4e34-aa6a-e6cc48a6c4eb"
categories: ["tutorials"]
---

## Introduction

React is currently the most popular and widely used JavaScript framework for building all kinds of applications. In both React and React Native, there are various ways to keep the application state updated and communicate changes to child components. In this article, I will compare two different approaches: Observable Pattern and useContext, let's get started.

## Observable Pattern:

The Observable pattern is a way to notify components when a change occurs in the application state. In React, we can implement this pattern using the Observable class and the `subscribe()` method. We can use this to keep the data in our application updated without having to pass it from one component to another.

Here is an example of how to implement the Observable pattern using TypeScript:

```
class Observable {
    private observers: any[] = []
    subscribe(fn: any) {
        this.observers.push(fn);
    }

    unsubscribe(fn: any) {
        this.observers = this.observers.filter((subscriber) => subscriber !== fn);
    }

    notify() {
        this.observers.forEach((observer) => observer());
    }
}

const observable = new Observable();

// Then, in a component that needs to stay updated with the observable, we can subscribe to changes like this:

observable.subscribe(() => {
    // do something when a change occurs
});

// In the component that performs the action, we notify the component that needs to stay updated using:
oservable.notify();

```

## useContext:

The `useContext` hook is a way to share data in a component hierarchy without having to pass props down explicitly. This allows us to avoid the need to manually pass data through multiple levels.

Here is an example of how to use `useContext`:

```
import { createContext, useContext } from 'react';

interface DataContextInterface {
    data: any;
    setData: (data: any) => void;
}

const DataContext = createContext<DataContextInterface>({
    data: null,
    setData: () => {},
});

const DataProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<any>(null);

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    );
};

// In the root file of your application
const ContextState = ({children}: any) => {
  return (
    <DataContext>
      {children}
    </DataContext>
  )
}

const App = () => {

  return (

    <NavigationContainer>
      <ContextState>
	       // Tu aplicacion aqui...
      </ContextState>
    </NavigationContainer>
    
  );
}

export default App

// In a component that needs to access the context:
const MyComponent = () => {
    const { data, setData } = useContext(DataContext);

    return (
        // do something with the data provided by the context
    );
};

```

## Comparison between both methods:

Both approaches have their pros and cons. The Observable Pattern is a powerful way to keep components updated when changes occur in the application state. We don't have to pass data from one component to another and we don't have to worry about prop drilling. On the other hand, the Observable pattern may require a bit more setup and may be less intuitive for developers who are not familiar with it.

On the other hand, `useContext` is a simpler way to share data between components in a component hierarchy. It's easy to use and most developers are likely already familiar with it. However, excessive use of `useContext` can lead to the creation of a large context that is difficult to maintain and understand.

An advantage of the Observable pattern is that it is very scalable and can handle a large number of observers and observable objects. Additionally, observable objects can be very complex and contain multiple properties that may change.

The `useContext` hook has the advantage of being very easy to use and can significantly simplify the way state is shared between components.

As for the disadvantages, the Observable pattern can be more difficult to understand and implement correctly than the `useContext` hook. Additionally, there may be a higher performance cost when creating and notifying observable objects and observers, while `useContext` may be limited in terms of the complexity of data that can be stored and shared. It may also be difficult to track and debug when many different contexts are used.

## In summary:

Both approaches have their pros and cons, and the choice depends on the specific use case. If a scalable and complex solution is needed for sharing data between many components, the Observable pattern may be a good option. If a simple and easy-to-use solution is needed for sharing global data, the useContext hook is a good option.

Ultimately, the choice depends on the specific requirements of the application and the preferred coding style of the developer.
