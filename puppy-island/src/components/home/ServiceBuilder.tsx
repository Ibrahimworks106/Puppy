"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDogName } from "@/lib/dogName";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SERVICES } from "@/lib/constants";

export const ServiceBuilder = () => {
  const { dogName } = useDogName();
  const [selectedServices, setSelectedServices] = useState<Set<string>>(new Set());

  const toggleService = (id: string) => {
    const newSelected = new Set(selectedServices);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedServices(newSelected);
  };

  const totalPrice = SERVICES.reduce((acc, service) => {
    return selectedServices.has(service.id) ? acc + service.price : acc;
  }, 0);

  return (
    <section id="service-builder" className="relative bg-sand py-24 px-6 md:px-12">
      {/* Sticky Total Bar */}
      <div className="sticky top-[72px] z-40 -mx-6 md:-mx-12 px-6 md:px-12 py-4 bg-ocean text-foam shadow-lg mb-16 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-widest opacity-70">Selected Services:</span>
          <div className="flex -space-x-2">
            {SERVICES.filter(s => selectedServices.has(s.id)).map(s => (
              <div key={s.id} className="w-8 h-8 rounded-full bg-foam/20 flex items-center justify-center text-lg border-2 border-ocean">
                {s.emoji}
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="text-right">
            <span className="block font-mono text-[10px] uppercase opacity-70">Total Estimate</span>
            <span className="text-2xl font-bold font-display">${totalPrice}</span>
          </div>
          <Button variant="primary" size="md" className="bg-coral hover:bg-coral/90">
            Proceed to Booking
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-ocean mb-4">
            Let&apos;s Design <span className="italic font-bold">{dogName}</span>&apos;s Island Experience
          </h2>
          <p className="font-body text-on-surface-variant text-lg opacity-70">
            Select from our bespoke range of luxury services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card 
                selected={selectedServices.has(service.id)}
                onClick={() => toggleService(service.id)}
                className="p-8 h-full flex flex-col"
              >
                <div className="text-5xl mb-6">{service.emoji}</div>
                <h3 className="font-display text-2xl text-ocean mb-2">{service.name}</h3>
                <p className="font-body text-sm text-on-surface-variant mb-8 flex-1">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="font-mono text-xs font-bold text-palm uppercase tracking-tighter">
                    From ${service.price} / {service.priceUnit}
                  </div>
                  <Button 
                    variant={selectedServices.has(service.id) ? "secondary" : "ghost"}
                    size="sm"
                    className="h-9 px-6"
                  >
                    {selectedServices.has(service.id) ? "Added" : "Add"}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
          
          {/* Extended Services (from image) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-8 h-full flex flex-col">
              <div className="text-5xl mb-6">🛁</div>
              <h3 className="font-display text-2xl text-ocean mb-2">Spa Bundle</h3>
              <p className="font-body text-sm text-on-surface-variant mb-8 flex-1">
                Mud baths, blueberry facials, and paw-dicures.
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="font-mono text-xs font-bold text-palm uppercase tracking-tighter">
                  $120 Full Spa
                </div>
                <Button variant="ghost" size="sm" className="h-9 px-6">Add</Button>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Card className="p-8 h-full flex flex-col">
              <div className="text-5xl mb-6">🦮</div>
              <h3 className="font-display text-2xl text-ocean mb-2">Guided Walks</h3>
              <p className="font-body text-sm text-on-surface-variant mb-8 flex-1">
                Scenic nature trail walks with GPS tracking for owners.
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="font-mono text-xs font-bold text-palm uppercase tracking-tighter">
                  $30 / 45 Min
                </div>
                <Button variant="ghost" size="sm" className="h-9 px-6">Add</Button>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Card className="p-8 h-full flex flex-col">
              <div className="text-5xl mb-6">📸</div>
              <h3 className="font-display text-2xl text-ocean mb-2">Photography</h3>
              <p className="font-body text-sm text-on-surface-variant mb-8 flex-1">
                Professional pup portraits in our dedicated island studio.
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="font-mono text-xs font-bold text-palm uppercase tracking-tighter">
                  $150 / Session
                </div>
                <Button variant="ghost" size="sm" className="h-9 px-6">Add</Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
