"use client";

import React, { useState, useEffect, ReactNode, cloneElement } from "react";

export default function ComponentSearch({ children }: { children: ReactNode }) {
  const [search, setSearch] = useState("");
  const [components, setComponents] = useState<ReactNode[] | null>(null);

  useEffect(() => {
    const componentElements = React.Children.toArray(children);
    setComponents(componentElements);
  }, [children]);

  if (components === null) {
    return null;
  }

  const filteredComponents = components.filter((child: any) => {
    return child.props["data-component"]
      .toLowerCase()
      .includes(search.toLowerCase());
  });

  return (
    <div className="p-4">
      <input
        type="text"
        value={search}
        placeholder="Search components…"
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-4 border rounded-md"
      />
      <div className="mt-4">
        {filteredComponents.length > 0 ? (
          filteredComponents.map((component, index) => {
            if (React.isValidElement(component)) {
              return (
                <div key={index} className="mb-4">
                  {cloneElement(component)}
                </div>
              );
            }
            return null;
          })
        ) : (
          <p>No components found</p>
        )}
      </div>
    </div>
  );
}